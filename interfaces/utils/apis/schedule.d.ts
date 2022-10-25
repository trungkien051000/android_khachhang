interface IScheduleDataAPI {
    MaBaoTri: string | number;
    MaNhanVien: string | number;
    MaKhachHang: string | number;
    MaBinhLuan: string | number;
    TieuDe: string;
    MoTa: string | null;
}

interface IGetScheduleDetailAPIRes extends IBaseAPIRes {
    results: IScheduleDataAPI;
}

interface ISendScheduleAPIRes extends IBaseAPIRes {
    results: null;
}
