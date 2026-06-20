/**
 * Standard response structure for all API endpoints.
 */
export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T | null;
}

/**
 * Utility class for creating consistent API responses.
 */
export class ResponseUtil {

    /**
     * Creates a successful response with data.
     *
     * @param data
     */
    static success<T>(data: T): ApiResponse<T> {
        return {
            code: 200,
            message: "success",
            data: data
        }
    }

    /**
     * Creates a failed response with an error code and message.
     *
     * @param code
     * @param message
     */
    static fail(code: number, message: string): ApiResponse<null> {
        return {
            code,
            message,
            data: null
        }
    }
}
