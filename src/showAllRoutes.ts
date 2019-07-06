import { Application } from "express";
class ShowAllRoutes {
  public static display(app: Application) {
    console.log("------------------------------------------------------------------------------------------------------------");
    console.log("%s \t|\t%s ", "Method", "URI");
    console.log("------------------------------------------------------------------------------------------------------------");
    app._router.stack.forEach(ShowAllRoutes.print.bind(undefined, []));
    console.log("------------------------------------------------------------------------------------------------------------");
  }
  public static print(path, layer) {
    if (layer.route) {
      layer.route.stack.forEach(
        ShowAllRoutes.print.bind(
          undefined,
          path.concat(ShowAllRoutes.split(layer.route.path))
        )
      );
    } else if (layer.name === "router" && layer.handle.stack) {
      layer.handle.stack.forEach(
        ShowAllRoutes.print.bind(
          undefined,
          path.concat(ShowAllRoutes.split(layer.regexp))
        )
      );
    } else if (layer.method) {
      console.log(
        "%s \t|\t /%s",
        layer.method.toUpperCase(),
        path
          .concat(ShowAllRoutes.split(layer.regexp))
          .filter(Boolean)
          .join("/")
      );
    }
  }
  public static split(thing: any) {
    if (typeof thing === "string") {
      return thing.split("/");
    } else if (thing.fast_slash) {
      return "";
    } else {
      const match = thing
        .toString()
        .replace("\\/?", "")
        .replace("(?=\\/|$)", "$")
        .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
      return match
        ? match[1].replace(/\\(.)/g, "$1").split("/")
        : "<complex:" + thing.toString() + ">";
    }
  }
}

export default ShowAllRoutes;
