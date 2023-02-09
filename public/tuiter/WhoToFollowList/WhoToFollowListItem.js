const WhoToFollowListItem = (who) => {
  return `
    <li class="list-group-item bg-light">
        <div class="row">
            <img src="../explore/logo/${who.avatarIcon}" class="col-2 rounded-circle">
            <div class="col-6">
                <b>${who.userName}</b></br>
                @${who.handle}
            </div>
            <button class="btn btn-primary override-bs-follow m-1 col-2">Follow</button>
        </div>
    </li>`;
};

export default WhoToFollowListItem;
