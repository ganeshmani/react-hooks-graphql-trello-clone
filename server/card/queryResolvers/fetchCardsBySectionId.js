module.exports = async (__, args, cxt) => {
  try {
    const sectionId = args.request.sectionId;

    const cards = await cxt.card.getCardBySectionId(sectionId);

    return cards;
  } catch (e) {
    console.log("Error =>", e);
    return null;
  }
};
