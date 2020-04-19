module.exports = async (__, args, cxt) => {
  try {
    const sectionInfo = {
      title: args.request.title,
      label: args.request.label,
      pos: args.request.pos,
    };

    const section = await cxt.section.insertSection(sectionInfo);

    cxt.publisher.publish(cxt.SUBSCRIPTION_CONSTANTS.SECTION_ADDED, {
      sectionAdded: section,
    });

    return section;
  } catch (e) {
    console.log(e);
    return null;
  }
};
