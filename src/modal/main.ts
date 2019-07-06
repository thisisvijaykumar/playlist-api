class MainModel {
  public Schema;
  /**
   * @param query
   * @param options
   */
  public getAll() {
    return this.Schema.find({}).populate('videos');
  }

  /**
   * @param query
   */
  public get(query = {}) {
    return this.Schema.findOne(query).populate('videos').exec();
  }

  /**
   * @param data
   */
  public post(data) {
    return this.Schema.create(data);
  }

  /**
   * @param data
   */
  public delete(id) {
    return this.Schema.findByIdAndRemove(id);
  }

  /**
   * @param id
   * @param data
   */
  public update(id, data) {
    return this.Schema.findByIdAndUpdate({ _id: id }, data).exec();
  }
}

export default MainModel;