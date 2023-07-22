class HelloController {
  async index(req, res) {
    return res.json({ hello: 'world 2' })
  }
}

export default new HelloController()
