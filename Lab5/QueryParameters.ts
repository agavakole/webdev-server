export default function QueryParameters(app) {
  const calculator = (req, res) => {
    const { a, b, operation } = req.query;
    const first = parseInt(a as string);
    const second = parseInt(b as string);
    let result;

    switch (operation) {
      case "add":
        result = first + second;
        break;
      case "subtract":
        result = first - second;
        break;
      case "multiply":
        result = first * second;
        break;
      case "divide":
        result = first / second;
        break;
      default:
        result = "Invalid operation";
    }

    res.send(result.toString());
  };

  app.get("/lab5/calculator", calculator);
}
