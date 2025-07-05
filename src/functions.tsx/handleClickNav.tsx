const handleClickNav = (event: React.MouseEvent<HTMLDivElement>, link: string) => {
    if (!link) return; // no link, do nothing

    // Check if Cmd (metaKey) or Ctrl is pressed
    if (event.metaKey || event.ctrlKey) {
      // open in new tab
      window.open(link, '_blank');
    } else {
      // open in same tab
      window.location.href = link;
    }
  };

export default handleClickNav;