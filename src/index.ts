export function required(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`[easy.env] Missing value for key "${key}"`);
    }
    return value;
}




export function optional(key: string, fallback: string): string;
export function optional(key: string): string | null;

export function optional(key: string, fallback?: string): string | null{
    const value = process.env[key];
    if (!value) {
        return fallback ?? null
    }
    return value;
}