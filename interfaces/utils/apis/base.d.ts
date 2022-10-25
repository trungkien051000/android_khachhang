interface IBaseAPIRes {
    status?: string;
}

interface IErrorAPIRes extends IBaseAPIRes {
    status?: string;
    error?: {
        code: number;
        message: string;
    };
}
