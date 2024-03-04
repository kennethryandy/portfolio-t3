import { customAlphabet } from 'nanoid';

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
const length = 12;

const nanoId = customAlphabet(alphabet, length);

export const generateId = () => nanoId();