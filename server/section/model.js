const Mongoose = require("mongoose");

const sectionSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  description: String,
  pos: {
    type: Number,
    required: true,
  },
});

class Section {
  static getSections() {
    return this.find().sort("pos").exec();
  }

  static getSectionById(sectionId) {
    return this.findOne({
      _id: Mongoose.mongo.ObjectID(sectionId),
    }).exec();
  }

  static insertSection(sectionInfo) {
    const section = this(sectionInfo);

    return section.save();
  }

  static updatePos(sectionId, pos) {
    return this.findOneAndUpdate(
      {
        _id: Mongoose.mongo.ObjectID(sectionId),
      },
      {
        $set: {
          pos,
        },
      },
      {
        new: true,
      }
    ).exec();
  }
}

sectionSchema.loadClass(Section);

module.exports = Mongoose.model("Section", sectionSchema);
