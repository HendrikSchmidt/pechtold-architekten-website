export async function get() {
    const response = await fetch('http://localhost:1337/api/kontakt');
    const contact = await response.json();

    if (contact) {
        return {
            body: { contact }
        };
    }

    return {
        status: 404
    };
}
