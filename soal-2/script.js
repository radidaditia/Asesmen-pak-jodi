const getData = async () => {
    const res = await fetch('https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11')
    const data = res.json()
    return data
}

getData().then(data => {
    console.log(data.data.jadwal)
})