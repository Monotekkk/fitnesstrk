export async function generateToken() {
    let response = await fetch(`https://wger.de/api/v2/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ 'username': 'monotek', 'password': 'fgDhBfGCgf8yD3H' })
    }
    )
    console.log(response.body);
}
export async function muscule() {
    let response = await fetch(``)

}