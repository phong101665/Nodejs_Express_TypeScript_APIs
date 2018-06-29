import * as mongoose from 'mongoose';
import { ContactModel } from './contact'

export const Schema = mongoose.Schema;

let contactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String            
    },
    company: {
        type: String            
    },
    phone: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
}).pre("save", (next: any) => {
    if (this._doc) {
        let doc: ContactModel = <ContactModel>this._doc;
    }

    next();
    return this;
});

export let ContactSchema: mongoose.Model<ContactModel> = mongoose.model<ContactModel>("contact", contactSchema, "Contacts", true)