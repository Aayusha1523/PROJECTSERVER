import mongoose from 'mongoose'
import { Url } from 'url'

export const connectDatabase = (url: string) => {
    mongoose.connect(url)
        .then(() => console.log('Database connected'))
        .catch((err: Error) => console.log('Database connection error', err));
};

