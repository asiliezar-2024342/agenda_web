// DB
export default class Contact {
  constructor(name, email, phone, location, birthday, isFavorite = false) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.birthday = birthday;
    this.isFavorite = isFavorite;
  }
}
