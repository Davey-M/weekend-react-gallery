-- Database name = react-gallery

CREATE TABLE "images" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(2000) NOT NULL,
    "description" VARCHAR(9999) NOT NULL,
    "likes" INTEGER NOT NULL
);

INSERT INTO "images" ("path", "description", "likes")
VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
    ( 'images/IMG_20200928_114654851_HDR.jpg', 'A beautiful lake on a hike.', 0),
    ( 'images/IMG_20201219_180912074.jpg', 'Dog.', 0),
    ( 'images/IMG_20211017_141748833.jpg', 'Estes Park Colorado.', 0);