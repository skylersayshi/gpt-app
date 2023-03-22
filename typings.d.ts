import { AcceptsDiscriminator } from "mongoose";

interface Message {
    text: string;
    createdAt: AcceptsDiscriminator.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    }
}