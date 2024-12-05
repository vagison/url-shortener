const create = async (req, res, next) => {
  try {
    return res.status(200).json({ message: 'ok' });
  } catch (error) {
    next(error);
  }
};

export { create };
