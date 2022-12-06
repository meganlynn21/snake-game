/**
 * TODO: Figure out how to make the page refresh and go back to home page on reload. Might
 * have to do a game over screen first and then re route it that way instead of the refresh?
 *  */

export function Refresh() {
  const refreshPage = () => {
    window.location.reload();
  };

  return <>{refreshPage}</>;
}
