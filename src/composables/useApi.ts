import type { ApiResponse } from "@/types";
import { reactive, ref } from "vue";

interface UseApiOptions<T> {
  immediate?: boolean;
  initialData?: T;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

export function useApi<T = any>(
  apiCall: () => Promise<ApiResponse<T>>,
  options: UseApiOptions<T> = {}
) {
  const { immediate = false, initialData = null, onSuccess, onError } = options;

  const data = ref<T | null>(initialData);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const execute = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await apiCall();

      if (response.success && response.data) {
        data.value = response.data;
        onSuccess?.(response.data);
      } else {
        throw new Error(response.error || "API call failed");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      error.value = errorMessage;
      onError?.(errorMessage);
    } finally {
      loading.value = false;
    }
  };

  const reset = () => {
    data.value = initialData;
    error.value = null;
    loading.value = false;
  };

  if (immediate) {
    execute();
  }

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
}

// Composable for form handling
export function useForm<T extends Record<string, any>>(initialValues: T) {
  const form = reactive({ ...initialValues }) as T;
  const errors = ref<Partial<Record<keyof T, string>>>({});
  const isSubmitting = ref(false);

  const setFieldValue = <K extends keyof T>(field: K, value: T[K]) => {
    (form as any)[field] = value;
    // Clear error when field is updated
    if (errors.value[field]) {
      delete errors.value[field];
    }
  };

  const setFieldError = <K extends keyof T>(field: K, error: string) => {
    errors.value[field] = error;
  };

  const clearErrors = () => {
    errors.value = {};
  };

  const reset = () => {
    Object.assign(form, initialValues);
    clearErrors();
    isSubmitting.value = false;
  };

  const validate = (
    validationRules: Partial<Record<keyof T, (value: any) => string | null>>
  ) => {
    clearErrors();
    let isValid = true;

    Object.entries(validationRules).forEach(([field, rule]) => {
      if (rule) {
        const error = rule((form as any)[field]);
        if (error) {
          setFieldError(field as keyof T, error);
          isValid = false;
        }
      }
    });

    return isValid;
  };

  return {
    form,
    errors,
    isSubmitting,
    setFieldValue,
    setFieldError,
    clearErrors,
    reset,
    validate,
  };
}
