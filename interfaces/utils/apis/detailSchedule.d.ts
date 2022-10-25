interface IDetailScheduleDataAPI {
    MaBaoTri: string;
    TieuDe: string;
    MoTa: string;
    ThietBi: string;
    NhanVien: string;
    KhachHang: string;
    DiaChi: string;
    NgayBatDau: string;
    NgayKetThuc: string;
    NgayHoanThanh: string;
    TienDo: string;
    TrangThai: string;
    BinhLuan: string;
}

interface IGetDetailScheduleDetailAPIRes extends IBaseAPIRes {
    results: IDetailScheduleDataAPI;
}

interface ISendDetailScheduleAPIRes extends IBaseAPIRes {
    results: null;
}
