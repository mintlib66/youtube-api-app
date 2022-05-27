class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    })
    // console.log(response.data.items)
    return response.data.items
  }
}
export default Youtube
