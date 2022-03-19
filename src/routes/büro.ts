export async function get() {
    const response = await fetch('http://localhost:1337/api/buero');
    const office = await response.json();

    if (office) {
        return {
            body: { office }
        };
    }

    return {
        status: 404
    };
}
