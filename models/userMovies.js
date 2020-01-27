// Export the user movies model
module.exports = function (sequelize, DataTypes) {
    // Define the data types used in the model
    const userMovies = sequelize.define("userMovies", {
        imdbID: DataTypes.STRING,
        title: DataTypes.STRING,
        plot: DataTypes.STRING,
        poster: DataTypes.STRING,
        watched: DataTypes.BOOLEAN
    });
    userMovies.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        userMovies.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    // Return the model object at the end
    return userMovies;
};