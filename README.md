# tickertron

Tickertron is a simple stock watcher that displays stock market price information without the information overload of tradition stock watchers. Made with [React](https://reactjs.org/), [finnhub.io](https://finnhub.io/), and [react-bootsrap](https://react-bootstrap.github.io/).

![GitHub Logo](/public/tickertronexample.png)

## Quick Start
Open [http://jhiney.dev/tickertron](http://jhiney.dev/tickertron) to view tickertron in the browser.

Pressing `/` will activate Tickertron. Type in your favorite ticker(s) to see the intraday trend, current price, % Gain/Loss and previous close. Clicking an indivdual ticker will bring up a minute-by-minute chart of intraday price changes.

## Electron
Originally, Tickertron was conceived as an [Electron](https://www.electronjs.org/) app, however viewing in the browser quickly became the perfered method of viewing the app.
As such, the electron folder remains. Cloning this repo and runnning `npm install` and `npm run dev` will begin Tickertron in both the local host and an Electron app.

## Future Improvements
- [ ] Autocomplete Tickers
- [ ] Showing previous trading day data if no current data is available
- [ ] Real-time data option
- [ ] Exchange holiday recognition
- [ ] Crypto tickers
