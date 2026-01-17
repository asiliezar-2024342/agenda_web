// DB
export class Contact {
    constructor(name, email, phone, location, birthday, isFavorite = false) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.birthday = birthday;
        this.isFavorite = isFavorite;
    }
}

export const contactsDB = [
    new Contact("Angel Siliezar", "angel@gmail.com", "7845-1234", "San Salvador, SV", "2000-05-15", true),
    new Contact("María García", "maria.garcia@gmail.com", "7123-4567", "Madrid, ES", "1995-08-22"),
    new Contact("John Doe", "john.doe@outlook.com", "555-0199", "New York, US", "1988-11-03"),
    new Contact("Sofía Rodríguez", "sofia.rod@yahoo.es", "7788-9900", "Ciudad de México, MX", "1992-03-12"),
    new Contact("Lucas Miller", "lucas.m@hotmail.com", "444-5566", "London, UK", "1990-06-25"),
    new Contact("Elena Popova", "elena.p@gmail.com", "111-2233", "Moscow, RU", "1997-12-30"),
    new Contact("Kenji Sato", "kenji.s@outlook.jp", "888-9900", "Tokyo, JP", "1985-07-07"),
    new Contact("Clara Schmidt", "clara.s@web.de", "222-3344", "Berlin, DE", "1993-09-15"),
    new Contact("Ahmed Hassan", "ahmed.h@provider.com", "333-4455", "Cairo, EG", "1982-01-01"),
    new Contact("Bianca Silva", "bianca.s@uol.com.br", "666-7788", "São Paulo, BR", "1998-10-22"),
    new Contact("Marlon Pérez", "marlon.p@gmail.com", "1122-2442", "San Salvador, SV", "2000-05-15", true),
    new Contact("Pierre Dubois", "pierre.d@orange.fr", "01-44-55-66", "Paris, FR", "1989-04-10"),
    new Contact("Liam Wilson", "liam.w@gmail.ca", "416-555-0100", "Toronto, CA", "1994-11-28"),
    new Contact("Alessandro Ricci", "ale.ricci@tiscali.it", "06-1234-5678", "Rome, IT", "1991-07-19"),
    new Contact("Chloe Smith", "chloe.s@outlook.com.au", "02-9876-5432", "Sydney, AU", "1996-03-05"),
    new Contact("Wei Chen", "wei.chen@qq.com", "10-8765-4321", "Beijing, CN", "1987-09-09"),
    new Contact("Aarav Patel", "aarav.p@gmail.com", "91-22-1234", "Mumbai, IN", "1990-01-25"),
    new Contact("Camila López", "cami.lopez@hotmail.com.ar", "11-4455-6677", "Buenos Aires, AR", "1999-06-12"),
    new Contact("Min-ji Kim", "minji.k@naver.com", "02-555-1234", "Seoul, KR", "1995-12-05"),
    new Contact("Andrés Martínez", "andres.m@gmail.com", "300-123-4567", "Bogotá, CO", "1993-08-30"),
    new Contact("Lars Jensen", "lars.j@telia.se", "08-123-45-67", "Stockholm, SE", "1984-05-20"),
    new Contact("Amara Okafor", "amara.o@yahoo.com", "01-555-6789", "Lagos, NG", "1992-10-10"),
    new Contact("Yusuf Yilmaz", "yusuf.y@hotmail.com", "212-555-1234", "Istanbul, TR", "1988-02-28"),
    new Contact("Carmen Reyes", "carmen.r@gmail.com", "5555-8888", "Guatemala City, GT", "2002-01-15"),
    new Contact("Emma de Vries", "emma.dv@outlook.com", "020-123-4567", "Amsterdam, NL", "1991-04-22"),
    new Contact("Luis Quispe", "luis.q@gmail.com", "01-234-5678", "Lima, PE", "1986-11-11"),
    new Contact("Jack Brown", "jack.b@xtra.co.nz", "09-345-6789", "Auckland, NZ", "1997-07-03"),
    new Contact("Valentina Soto", "vale.soto@gmail.com", "2-2345-6789", "Santiago, CL", "1994-09-18"),
    new Contact("Jakub Nowak", "jakub.n@wp.pl", "22-123-45-67", "Warsaw, PL", "1983-12-12"),
    new Contact("Thabo Mbeki", "thabo.m@yahoo.com", "021-555-9876", "Cape Town, ZA", "1980-03-21", true)
];