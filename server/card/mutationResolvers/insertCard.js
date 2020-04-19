module.exports = async (__, args, cxt) => {
  try {
    const cardInfo = {
      title: args.request.title,
      label: args.request.label,
      pos: args.request.pos,
      sectionId: args.request.sectionId,
    };

    const card = await cxt.card.insertCard(cardInfo);

    cxt.publisher.publish(cxt.SUBSCRIPTION_CONSTANTS.CARD_ADDED, {
      cardAdded: card,
    });

    return card;
  } catch (e) {
    console.log("Error =>", e);

    return null;
  }
};
