# Daily Challenges Web App

This project is an **interactive web application** that provides a daily challenge and displays daily quotes. It can be used for any period, not just Ramadan, with the feature of opening **one challenge per day only**.

## Features

- **Daily Calendar**: 30 days, one challenge per day.
- **Quote Sharing**: Share daily quote as text or image.
- **Progress Bar**: Shows the completion percentage based on completed challenges.
- **Daily Challenges**: 30 different challenges with progress saved in local storage.
- **Congratulations Modal**: Shown when all challenges are completed, with option to download or share as an image.
- **Interactive UI**: Starry animated background and swinging lantern.
- **Fully Arabic Support** and mobile-friendly UI.

## Project Structure

```
project/
├── index.html        # Main HTML page
├── style.css         # CSS styles and animations
├── script.js         # JavaScript logic
└── assets/
    └── congrats.png # Congratulations image
```

## How to Run

1. Open the project folder on your computer.
2. Ensure all files are present (`index.html`, `style.css`, `script.js`, `assets/`).
3. Open `index.html` in any modern browser (Chrome, Firefox, Edge).
4. The daily challenges and UI will appear.

## How to Use

- Click the **current day** to view the daily challenge.
- Click **"Completed"** after finishing the challenge to update progress.
- Share daily quotes as **text** or **image**.
- When all challenges are completed, a **congratulations modal** appears, which can be downloaded or shared as an image.

## Notes

- Progress is saved in **LocalStorage**, so reloading the page preserves completed challenges.
- Image sharing uses **HTML2Canvas**.
- Image sharing only works on browsers that support the `navigator.share` API.

## License

This project is open-source and free to use or modify for personal or educational purposes.

## Author

**Amany Elsayed**
- GitHub: [@Amany-Elsayed](https://github.com/Amany-Elsayed)
- Junior MEAN Stack Developer