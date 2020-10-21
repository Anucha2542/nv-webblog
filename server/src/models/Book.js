module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        namebook: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        category: DataTypes.STRING,
        details: DataTypes.STRING,
        price: DataTypes.STRING,
        status: DataTypes.STRING,
    })
    return Book
}