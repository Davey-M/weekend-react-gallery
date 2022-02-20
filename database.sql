-- Database name = react-gallery

CREATE TABLE "images" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(2000) NOT NULL,
    "description" VARCHAR(9999) NOT NULL,
    "likes" INTEGER NOT NULL,
    "image-height" INTEGER NOT NULL,
    "image-width" INTEGER NOT NULL
);

INSERT INTO "images" ("path", "description", "likes", "image-height", "image-width")
VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0, 150, 150),
    ( 'images/IMG_20200928_114654851_HDR.jpg', 'A beautiful lake on a hike.', 0, 3072, 4096),
    ( 'images/IMG_20201219_180912074.jpg', 'Dog.', 0, 4096, 3072),
    ( 'images/IMG_20211017_141748833.jpg', 'Estes Park Colorado.', 0, 4096, 3072);