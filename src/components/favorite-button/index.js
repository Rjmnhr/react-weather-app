import React, { useEffect, useState } from "react";
import { StarFilled } from "@ant-design/icons";
import { FavoriteStyled } from "./style";

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <FavoriteStyled>
      <p
        onClick={handleFavoriteClick}
        className={
          isFavorite ? "fav-container selected-fav-container" : "fav-container"
        }
      >
        <StarFilled />
      </p>
    </FavoriteStyled>
  );
};

export default FavoriteButton;
