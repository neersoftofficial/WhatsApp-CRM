// Placeholder API route that will eventually provide QR data for a WA driver.
// Right now it returns a simple JSON placeholder.
export default function handler(req, res) {
  res.status(200).json({
    status: "placeholder",
    message: "This route will return QR data when the WA driver is implemented."
  })
}
