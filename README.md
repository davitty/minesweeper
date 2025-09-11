# 🎮 JavaScript Minesweeper Game

A classic Minesweeper game built with vanilla JavaScript, HTML, and CSS. This project recreates the nostalgic puzzle game with a clean, retro-styled interface.

## 🎯 Features

- **8x8 Grid**: Classic board size with 64 tiles
- **10 Mines**: Strategically placed random mines
- **Flag System**: Right-click to flag suspected mines
- **Number Display**: Shows count of adjacent mines (1-8)
- **Color-coded Numbers**: Each number has a unique color for easy identification
- **Auto-reveal**: Clicking empty tiles automatically reveals adjacent empty areas
- **Win/Lose Detection**: Game ends when you hit a mine or clear all safe tiles
- **Reset Function**: Start a new game anytime
- **Retro Styling**: Pixelated font and classic Minesweeper aesthetics

## 🚀 How to Play

1. **Objective**: Clear all tiles without hitting any mines
2. **Left Click**: Reveal a tile
3. **Right Click**: Place or remove a flag on suspected mines
4. **Numbers**: Indicate how many mines are adjacent to that tile
5. **Win**: Clear all non-mine tiles
6. **Lose**: Click on a mine (all mines will be revealed)
7. **Reset**: Click the "Reset" button to start over

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and layout with Google Fonts (Pixelify Sans)
- **Vanilla JavaScript**: Game logic and interactivity

## 📁 Project Structure

```
minesweeper/
├── index.html          # Main HTML file
├── minesweeper.css     # Stylesheet with retro design
├── minesweeper.js      # Game logic and functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

- **Retro Font**: Uses Google Fonts "Pixelify Sans" for authentic retro gaming feel
- **Color System**: Each number (1-8) has a distinct color:
  - 1: Blue
  - 2: Green  
  - 3: Red
  - 4: Navy
  - 5: Brown
  - 6: Teal
  - 7: Black
  - 8: Gray
- **Visual Feedback**: Clicked tiles change appearance
- **Mine Counter**: Displays total mines at the top

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/minesweeper-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd minesweeper-game
   ```
3. Open `index.html` in your web browser

### Or play directly:
Simply download the files and open `index.html` in any web browser - no server required!

## 🎮 Game Mechanics

- **Board Size**: 8×8 grid (64 tiles total)
- **Mine Count**: 10 mines randomly placed
- **Flagging**: Right-click to toggle flags on/off
- **Auto-reveal**: Empty tiles automatically reveal adjacent empty areas
- **Win Condition**: Reveal all 54 safe tiles (64 total - 10 mines)
- **Lose Condition**: Click on any mine

## 🔧 Customization

Want to modify the game? Here are some easy tweaks:

**Change difficulty** (in `minesweeper.js`):
```javascript
let rows = 8;        // Board height
let columns = 8;     // Board width  
let minesCount = 10; // Number of mines
```

**Modify colors** (in `minesweeper.css`):
```css
.x1 { color: blue; }   /* Change number colors */
.x2 { color: green; }  /* Customize as needed */
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Difficulty levels (Beginner, Intermediate, Expert)
- [ ] Timer functionality
- [ ] High score tracking
- [ ] Custom board sizes
- [ ] Sound effects
- [ ] Mobile-responsive design improvements
- [ ] Dark/Light theme toggle

## 👨‍💻 Author

Created with ❤️ by **davitty**

---

**Have Fun Playing!** 🎮💣

*Right-click to flag, left-click to reveal, and may the odds be ever in your favor!*
