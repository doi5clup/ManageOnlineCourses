create database OnlineCourse;

use OnlineCourse;

create table Log_In
(
    ID_LogIn int auto_increment primary key,
    UserName varchar(50) null,
    Pass varchar(15) null,
    LoaiNguoiDung varchar(10) null
);

create table TaiKhoan
(
    MaTK int auto_increment primary key,
    SoTK varchar(16) null,
    SoDu float(25) null,
    NganHangLK nvarchar(30) null
);

create table HocVien
(
    MaHV int auto_increment primary key,
    HoTen nvarchar(50) null,
    NgaySinh date null,
    GioiTinh char(3) null,
    SoDienThoai varchar(15) null,
    Email varchar(30) null,
    DiaChi varchar(50) null,
    MaTK int null,
    LinkAvatar varchar(255) null,
    ID_LogIn int null,
        constraint FK_HocVien_TaiKhoan
    foreign key (MaTK) references TaiKhoan (MaTK),
        constraint FK_HocVien_Log_In
    foreign key (ID_LogIn) references Log_In (ID_LogIn)
);

create table GiaoVien
(
    MaGV int auto_increment primary key,
    HoTen nvarchar(50) null,
    NgaySinh date null,
    GioiTinh char(3) null,
    SoDienThoai varchar(15) null,
    Email varchar(30) null,
    DiaChi varchar(50) null,
    MaTK int null,
    LinkAvatar varchar(255) null,
    ID_LogIn int null,
        constraint FK_GiaoVien_TaiKhoan
    foreign key (MaTK) references TaiKhoan (MaTK),
        constraint FK_GiaoVien_Log_In
    foreign key (ID_LogIn) references Log_In (ID_LogIn)
);

create table KhoaHoc
(
    MaKH int auto_increment primary key,
    TenKH varchar(45)  null,
    NgayTao date null,
    NgayBD date null,
    NgayKT date null,
    HocPhi float(25) null,
    SLHV_Max int null,
    MoTa nvarchar(1000) null,
    LinhVuc nvarchar(30) null,
    LichHoc nvarchar(100) null,
    TrangThaiHD nvarchar(20) null,
    Slug varchar(255) null,
    LinkImage varchar(255) null,
    LinkVideo varchar(255) null,
    GVCN int null,
        constraint FK_KhoaHoc_GiaoVien
    foreign key (GVCN) references GiaoVien (MaGV)
);

create table HocVien_TG_KhoaHoc
(
    MaHV int not null,
    MaKH int not null,
    NgayTG date null,
    TinhTrang nvarchar(20) null,
    constraint PK_HocVien_TG_KhoaHoc primary key (MaHV,MaKH),
        constraint FK_HocVien_TG_KhoaHoc_HocVien
    foreign key (MaHV) references HocVien (MaHV),
        constraint FK_HocVien_TG_KhoaHoc_KhoaHoc
    foreign key (MaKH) references KhoaHoc (MaKH)
);

create table HocVienPhanHoi
(
    STT int auto_increment not null,
    MaHV int not null,
    MaKH int not null,
    NoiDung nvarchar(225) null,
    ThoiGian datetime null,
    constraint PK_HocVienPhanHoi primary key (STT,MaHV,MaKH),
        constraint FK_HocVienPhanHoi_HocVien
    foreign key (MaHV) references HocVien (MaHV),
        constraint FK_HocVienPhanHoi_KhoaHoc
    foreign key (MaKH) references KhoaHoc (MaKH)
);

create table GiaoVienPhanHoi
(
    STT int auto_increment not null,
    MaGV int not null,
    MaKH int not null,
    NoiDung nvarchar(225) null,
    ThoiGian datetime null,
    constraint PK_GiaoVienPhanHoi primary key (STT,MaGV,MaKH),
        constraint FK_GiaoVienPhanHoi_HocVien
    foreign key (MaGV) references GiaoVien (MaGV),
        constraint FK_GiaoVienPhanHoi_KhoaHoc
    foreign key (MaKH) references KhoaHoc (MaKH)
);

insert Log_In(UserName,Pass,LoaiNguoiDung) values('vinhhung@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('thuytrang@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('huuphu@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('anhquoc@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('phuthu@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('minhtuan@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('peter@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('tony@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('bruce@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('clark@gmail.com','123456','GiaoVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('ducan@gmail.com','123456','HocVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('ngoclinh@gmail.com','123456','HocVien');
insert Log_In(UserName,Pass,LoaiNguoiDung) values('admin@gmail.com','admin','Admin');

insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1011179576648035',2000000,N'ACB');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1013072124821570',2000000,N'BIDV');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1025508233667619',2000000,N'ACB');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1039890345775947',2000000,N'VietinBank');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1045743153899832',2000000,N'Techcombank');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1071811251667463',2000000,N'TP Bank');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1112891990998192',2000000,N'Agribank');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1147744342659906',2000000,N'Vietcombank');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1186971113493529',2000000,N'MB Bank');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1199910571247712',2000000,N'TP Bank');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1308040040318722',2500000,N'BIDV');
insert TaiKhoan(SoTK,SoDu,NganHangLK) values('1317382136172721',2500000,N'BIDV');

insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Đàm Vĩnh Hưng','1989-09-09',N'Nam','0111111111','vinhhung@gmail.com',N'Đường D4, Vũng Tàu, Bà Rịa Vũng Tàu',1,'https://img.docbao.vn/images/fullsize/2019/05/24/giai-tri/dam-vinh-hung.jpg',1);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Lê Thùy Trang','1996-02-03',N'Nữ','0222222222','thuytrang@gmail.com',N'Đường CN2, Nam Từ Liêm, Hà Nội',2,'https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2020/04/12/Thien-than-ao-dai-trang-sinh-nam-2004-vua-tho-ngay-lai-ca-tinh_9.jpg',2);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Nguyễn Hữu Phú','2001-11-10',N'Nam','0333333333','huuphu@gmail.com',N'Đường Phan Văn Lưu, Bến Lức, Long An',3,'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png',3);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Nguyễn Anh Quốc','2001-11-11',N'Nam','0444444444','anhquoc@gmail.com',N'Đường Tân Kỳ Tân Quý, Tân Bình, Hồ Chí Minh',4,'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png',4);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Nguyễn Phú Thụ','2001-11-12',N'Nam','0555555555','phuthu@gmail.com',N'Phố Thanh Đàm, Hoàng Mai, Hà Nội',5,'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png',5);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Lê Huỳnh Minh Tuấn','2000-03-02',N'Nam','0666666666','minhtuan@gmail.com',N'Phố Hai Bà Trưng, Sơn Hòa, Phú Yên',6,'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png',6);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Peter Parker','1996-06-01',N'Nam','0777777777','peter@gmail.com',N'Đường Lý Thái Tổ, Bỉm Sơn, Thanh Hóa',7,'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ncF4HivY2W6SQW5dEP3N3I4mfT0.jpg',7);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Tony Stark','1985-04-04',N'Nam','0888888888','tony@gmail.com',N'Đường Thuỷ Sơn 5, Ngũ Hành Sơn, Đà Nẵng',8,'https://woolongtalks.files.wordpress.com/2014/11/wpid-tony-stark-tony-stark-12952978-419-600.jpeg',8);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Bruce Wayne','1988-05-04',N'Nam','0999999999','bruce@gmail.com',N'Đường Phần Lăng 11, Thanh Khê, Đà Nẵng',9,'https://i.pinimg.com/550x/c7/68/8e/c7688e75665357316daba5f198225d89.jpg',9);
insert GiaoVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Clark Kent','1989-06-04',N'Nam','0101010101','clark@gmail.com',N'Đường Triệu Quốc Đạt, Cẩm Lệ, Đà Nẵng',10,'https://image.tmdb.org/t/p/w300//hErUwonrQgY5Y7RfxOfv8Fq11MB.jpg',10);

insert HocVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Trần Đức Ân','2002-01-01',N'Nam','0226860461','ducan@gmail.com',N'Đường E6, Liên Trì 1, Tuy Hòa, Phú Yên',11,'https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png',11);
insert HocVien(HoTen,NgaySinh,GioiTinh,SoDienThoai,Email,DiaChi,MaTK,LinkAvatar,ID_LogIn) 
	values(N'Phạm Ngọc Linh','2002-02-02',N'Nữ','0429609743','ngoclinh@gmail.com',N'Đường 24, Đông Lân, Hóc Môn, Hồ Chí Minh',12,'https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png',12);

insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'JavaScript','2022-01-01','2022-01-10','2022-03-03',1000000,30,N'Khóa học Javascript này là series tổng hợp các thủ thuật khi lập trình với Javascript, các thủ thuật này cũng có thể coi là các mẹo nhỏ giúp bạn xử lý code ngắn gọn và tối ưu hơn. Học viên có thể viết được các thư viện javascript cho website thay cho các thư viện có sẵn là jquery đang sử dụng.\ Đặc biệt với rất nhiều bài tập thực hành thực tế, chi tiết được kết hợp linh hoạt giữa các kiến thức lý thuyết các hiệu ứng từ các website nổi tiếng như Kenh14, Facebook để lập trình các chức năng tương tác với Frontend ví dụ: giỏ hàng, các tính năng view ảnh, notification trên facebook... sẽ giúp học viên rất nhanh chóng làm quen và thành thạo Javascript thông qua những bài tập thực hành sát với thực tế nhất.',
	N'IT',N'09:30-11:00 Thứ 2,4,6 mỗi tuần',N'Đang mở','java-script','https://i2.wp.com/enrollmind.com/wp-content/uploads/2021/10/Free-Javascript-Course-For-Beginners.jpg','0SJE9dYdpps',1);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'HTML/CSS','2022-01-01','2022-01-11','2022-03-21',1100000,35,N'Trong khóa học này, bạn sẽ học cách sử dụng HTML&CSS để tạo một trang web chuyên nghiệp, responsive được thiết kế cho cả máy tính để bàn và điện thoại di động. Bắt đầu với hiểu biết cơ bản về vai trò của HTML và CSS trong phát triển web, bạn sẽ học cách tạo biểu mẫu để thu thập thông tin của người dùng, cách hiển thị dữ liệu bằng bảng và các nguyên tắc thiết kế web responsive.\ Học HTML và CSS là những bước đầu tiên tuyệt vời trên con đường dẫn trở thành nhà phát triển phần mềm chuyên nghiệp.Nó sẽ cung cấp cho bạn các kỹ năng để làm việc hiệu quả hơn và giao tiếp đúng cách với các nhà phát triển (ngay cả khi bản thân bạn không muốn trở thành một lập trình viên chuyên nghiệp). Thật vô cùng thú vị khi có thể tự tạo các trang web, ứng dụng di động và trò chơi của riêng bạn.',
	N'IT',N'16:30-18:00 Thứ 2,4,6 mỗi tuần',N'Đang mở','html-css','https://miro.medium.com/max/750/1*eTuCOcn_u09KDIkEKoOhZQ.jpeg','zwsPND378OQ',3);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'NodeJS','2022-01-01','2022-01-12','2022-03-22',1200000,40,N'NodeJS là một công nghệ phát triển web mã nguồn mở hiện đang rất hot, nó được xây dựng để giúp cho các nhà phát triển có thể sử dụng JavaScript để lập trình phía backend. Điều này hướng đến một developer full hoàn toàn sử dụng JavaScript từ backend đến frontend.\ Bạn sẽ học được: Cách cài đặt bộ công cụ sử dụng nodejs, công cụ code visua studio code. Cách sử dụng modul và NPM trong nodejs. Nắm được kiến thức về cách code nodejs thuần và cách code nodejs sử dụng framework là Express.js. Cách kết nối nodejs với cơ sở dữ liệu mongodb, mongooose, postgresql. Cung cấp đầy đủ kiến thức trang bị cho bạn các kiến thức để sử dụng nodejs một cách hiệu quả nhất. Xây dựng 1 ứng dụng website bán hàng hoàn chỉnh bằng nodejs.',
	N'IT',N'16:30-18:00 Thứ 3,5,7 mỗi tuần',N'Đang mở','nodejs','https://tedu.com.vn/uploaded/images/path/102020/nodejs.png','ysjJlvQ3FFc',4);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'ReactJS','2022-01-01','2022-01-13','2022-03-23',1500000,30,N'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.\ Bạn sẽ học được: Hiểu về khái niệm SPA/MPA. Hiểu về khái niệm hooks. Hiểu cách ReactJS hoạt động. Hiểu về function/class component. Biết cách tối ưu hiệu năng ứng dụng. Thành thạo làm việc với RESTful API. Hiểu rõ ràng Redux workflow. Thành thạo sử dụng Redux vào dự án. Biết sử dụng redux-thunk middleware. Xây dựng sản phẩm thực tế (clone Tiktok). Triển khai dự án React ra Internet. Đủ hành trang tự tin apply đi xin việc',
	N'IT',N'09:30-11:00 Thứ 3,5,7 mỗi tuần',N'Đang mở','reactjs','https://miro.medium.com/max/1400/1*EVqCcmCPgpNKxU1wzcTHgw.png','x0fSBAgBrOQ',5);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'C/C++','2021-10-01','2021-10-10','2021-12-31',2100000,35,N'Khóa học sẽ trang bị cho học viên các kỹ năng lập trình được minh hoạ cụ thể bằng ngôn ngữ lập trình C/C++ từ cơ bản đến nâng cao. Khóa học bao gồm các kỹ thuật lập trình trên các kiểu dữ liệu cơ bản, các phát biểu lựa chọn, câu lệnh điều khiển, vòng lặp, mảng, con trỏ, kiểu cấu trúc. Bên cạnh đó khóa học cũng trang bị cho học viên kiến thức xử lý tập tin, cách viết chương trình theo kiểu lập trình hàm...\ Qua khóa học Học lập trình C/C++ TỪ A - Z tại Coursin, học viên có thể tự nâng cao kỹ năng lập trình của mình, dễ dàng tiếp cận các ngôn ngữ cấp cao và công nghệ mới. Đây là khóa học tạo tiền đề tốt cho việc tiếp cận phương pháp lập trình hướng đối tượng, một phương pháp lập trình cần phải có của một lập trình viên.',
	N'IT',N'09:30-11:00 Thứ 2,4,6 mỗi tuần',N'Đã đóng','c-plus-plus','https://miro.medium.com/max/2000/1*oiwBIOAfbC5oN8Ml67arTQ.png','WS05AU6YYm4',6);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'Python','2022-01-01','2022-01-20','2022-03-25',1800000,40,N'Khóa học sẽ cung cấp toàn bộ kiến thức từ cơ bản đến chuyên sâu của lập trình Python, giúp học viên có thể tạo ra một ứng dụng Python hoàn chỉnh sau khi hoàn thành khóa học:\- Cung cấp những cơ hội thực hành tạo ứng dụng Python ngay trong quá trình học.- Sau khi hoàn thành khóa học, học viên sẽ có kiến thức để tiếp tục học các môn khác nhau: Cấu trúc dữ liệu, lập trình Kotlin, lập trình Java, lập trình Android, Web...- Tìm hiểu cơ bản về ngôn ngữ lập trình Python (Từ định nghĩa đến kiểu dữ liệu, biến, câu lệnh, mảng, chuỗi ... cấu trúc điều khiển, cấu trúc vòng lặp trong Python....).- Cách tạo và gọi hàm trong Python.- Xử lý mảng, List, chuỗi, tập tin.',
	N'IT',N'16:30-18:00 Thứ 2,4,6 mỗi tuần',N'Sắp mở','python','https://cdn.springpeople.com/media/python%20logo.png','NZj6LI5a9vc',7);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'Julia','2022-01-01','2022-01-21','2022-03-26',1900000,30,N'Julia được thiết kế để giải quyết các yêu cầu của tính toán khoa học và số hiệu năng cao đồng thời cũng hiệu quả cho lập trình mục đích chung. Bạn sẽ có thể truy cập tất cả các bộ xử lý và bộ nhớ có sẵn, quét dữ liệu từ mọi nơi trên web và luôn có thể truy cập thông qua bất kỳ thiết bị nào bạn quan tâm để sử dụng miễn là nó có trình duyệt. Tham gia với chúng tôi để khám phá các khả năng tính toán mới. Hãy bắt đầu học Julia. Đến cuối khóa học, bạn sẽ có thể:\ - Chương trình sử dụng ngôn ngữ Julia bằng cách thực hành thông qua các bài tập.- Viết chương trình Julia đơn giản của riêng bạn từ đầu.- Hiểu những lợi thế và năng lực của Julia như một ngôn ngữ điện toán.- Làm việc trong máy tính xách tay Jupyter bằng ngôn ngữ Julia.- Sử dụng các gói Julia khác nhau như Plots, DataFrames và Stats.',
	N'IT',N'09:30-11:00 Thứ 3,5,7 mỗi tuần',N'Sắp mở','julia','https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201808/julia-programming-language-mit-00_0.png','81DRruCIO34',8);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'TOEIC ADVANCED 700+','2022-01-22','2022-01-17','2022-03-23',2200000,35,N'Khoá học này được thiết kế rất phù hợp cho các bạn có trình độ tiếng anh tốt muốn đạt điểm tối đa trong kỳ thi TOEIC (từ 700 điểm trở lên) và mong muốn thăng tiến nhanh trong sự nghiệp của mình.\ NỘI DUNG:– Xây dựng cũng như giải thích rất rõ cách sử dụng từ mới tiếng anh theo từng chủ đề tiếng anh về kinh doanh và văn phòng: Jobs & Positions, Recruitment, Appraisals, Training & Staff Development, Earning, Rewards & Benefits, Sales & Marketing, Money & Banking, Contract, Dispute Resolution, Business idioms, Condition and Requirement, Business Travel, The weather, Public Transport, Letters, On the telephone, Meetings & Presentations, Hotels, Art, Sports,...– Khóa học đi sâu vào lí thuyết và thực hành tất cả các phần thi trong bài thi TOEIC trong đó tập trung vào những phần khó nhất của bài thi TOEIC như: Phần 3, 4 của Listening và phần 5,6, 7 của Reading.',
	N'Tiếng Anh',N'16:30-18:00 Thứ 3,5,7 mỗi tuần',N'Sắp mở','toeic-advanced-700','https://www.dolenglish.vn/wp-content/uploads/2021/08/toeic.jpg','-w41KKJOQOI',9);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'IELTS 7.5+','2022-01-01','2022-01-23','2022-03-28',2900000,40,N'Khoá học dành cho các bạn học viên sắp thi IELTS có target điểm là 7.5-8.0. Lớp sẽ học theo kiểu hình thức thi FULL TEST speaking and writing, để các bạn học viên có thể làm quen với tâm lý thi cứ, sức ép về mặt thời gian.\– Trong phần writing, đầu tiên giáo viên chọn một bài viết để phân tích, cung cấp từ vựng, cấu trúc bài viết, rồi đến học viên sẽ tự viết lại trên giấy trong với thời gian ngắn hơn thi thật (ví dụ task1 viết trong 15 phút, task2 viết trong thời gian 30 phút). Sau đó, giáo viên sẽ nhận bài và dùng máy chiếu để chữa bài ngay trên lớp, phân tích chi tiết từng điểm mạnh và điểm yếu của mỗi học viên để học viên có thể phát huy thay vì đi bắt chước example của người khác. Trong mỗi buổi học, học viên được viết ít nhất là 2 bài.– Trong phần speaking, Học viên được phỏng vấn one to one với giáo viên theo hình thức thi speaking full test của IELTS và có feed back kỹ lưỡng từ giáo viên.',
	N'Tiếng Anh',N'16:30-18:00 Thứ 3,5,7 mỗi tuần',N'Sắp mở','ielts','https://acet.edu.vn/wp-content/uploads/2021/03/hoc-ielts-8-0.jpg','u1laYUVQA0c',10);
insert KhoaHoc(TenKH,NgayTao,NgayBD,NgayKT,HocPhi,SLHV_Max,MoTa,LinhVuc,LichHoc,TrangThaiHD,Slug,LinkImage,LinkVideo,GVCN)
	values(N'Khoá Luyện Thi TOEFL IBT','2022-01-01','2022-01-24','2022-03-29',2500000,30,N'Khoá học cung cấp cho học viên một quá trình luyện tập tổng thể từ trình độ thấp (foundation) cho đến trình độ cao (advanced) để có thể tham dự kỳ thi quốc tế này với kết quả cao nhất. Các khoá học thường ngắn, cường độ học tập cao để giúp học sinh tiến bộ trong thời gian ngắn nhất.\CHƯƠNG TRÌNH HỌC LIÊN TỤC CẬP NHẬT:- Các khóa học thiết kế phù hợp với trình độ học viên từng cấp học, với năm trình độ TOEFL Foundation, TOEFL Intermediate, TOEFL High-inter, TOEFL Intensive và TOEFL Advanced.- Các khoá học thiết kế riêng phù hợp trình độ học viên từng cấp học.- Các bài luyện tập được cô đọng với các chủ đề học thuật sát với đề thi thật.- Các kỹ năng sẽ được đi từ căn bản lên đến nâng cao cộng với việc một lượng từ vựng học thuật theo chủ điểm.- Các dạng bài thi của TOEFL được ôn tập kỹ càng. Bên cạnh đó, các giáo viên sẽ  cung cấp các kinh nghiệm, kỹ năng và bí kíp luyện thi hiệu quả nhất.',
	N'Tiếng Anh',N'16:30-18:00 Thứ 2,4,6 mỗi tuần',N'Sắp mở','toefl-ibt','https://indec.vn/wp-content/uploads/2021/03/image2-11.png','DJW2U2QlCOc',2);

insert HocVien_TG_KhoaHoc(MaHV,MaKH,NgayTG,TinhTrang) values(1,3,'2022-01-15',N'Chưa hoàn thành');
insert HocVien_TG_KhoaHoc(MaHV,MaKH,NgayTG,TinhTrang) values(1,9,'2022-01-25',N'Chưa hoàn thành');
insert HocVien_TG_KhoaHoc(MaHV,MaKH,NgayTG,TinhTrang) values(2,5,'2021-10-11',N'Đã hoàn thành');

insert HocVienPhanHoi(MaHV,MaKH,NoiDung,ThoiGian) values(2,5,N'Amazing good job :))','2022-01-01');
insert GiaoVienPhanHoi(MaGV,MaKH,NoiDung,ThoiGian) values(6,5,N'Hệ thống phản hồi chờ hơi lâu!!','2022-01-01');