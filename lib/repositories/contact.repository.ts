import { ContactModel } from '../models/contact'
import { BaseRepository } from './base.repository';
import { ContactSchema } from '../models/crmModel'

export class ContactRepo extends BaseRepository<ContactModel>{
    constructor() {
        super(ContactSchema);
    }
}

Object.seal(ContactRepo)