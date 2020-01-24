module.exports = function(sequelize, DataTypes)
{
    const userMovies = sequelize.define("userMovies",
    {
        imdbID: DataTypes.STRING,
        title: DataTypes.STRING,
        plot: DataTypes.STRING,
        watched: DataTypes.BOOLEAN
    });

    userMovies.associate = function(models)
    {
        userMovies.belongsTo(models.users,
            {
                foreignKey: {allowNull: false}
            });
    };

    return userMovies;
};