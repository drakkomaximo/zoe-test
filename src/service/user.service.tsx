export const getUser = async (): Promise<any> =>{
    const response = await fetch('/data/AGENTS_LIST.json')
    return response.json()
}