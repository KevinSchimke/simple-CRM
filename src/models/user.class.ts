export class User {
    firstName: string;
    lastName: string;
    birthDate: any;
    street: string;
    houseNo: number;
    zipCode: number;
    city: string;
    email: string;
    customIdName: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.houseNo = obj ? obj.houseNo : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
        this.customIdName = obj ? obj.customIdName : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            houseNo: this.houseNo,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email,
            customIdName: this.customIdName
        }
    }
}