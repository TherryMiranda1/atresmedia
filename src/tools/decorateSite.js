import { channels } from "../static/data";

export const addImage = (path) => {
  let image;
  channels.map((channel) => {
    if (path.includes(channel.title)) image = channel.image;
  });
  if (image) return image;
  else return channels[0].image;
};

export const decorateSite = (sites) => {
  let decorateds = [];
  sites.map((site) => {
    const decoratedSite = {
      name: site.name,
      description: site.description,
      createDate: site.createDate,
      path: site.path,
      image: addImage(site.path),
      publicPath: site.publicPath,
      key: site.key,
      _id: site._id,
    };
    decorateds.push(decoratedSite);
  });
  return decorateds;
};
