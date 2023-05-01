import { Alpine } from "alpinejs";

export default function AlpinePlugin(Alpine: Alpine) {
    Alpine.magic('hello', () => (name: string = 'World') => `Hello, ${name}!`);
}