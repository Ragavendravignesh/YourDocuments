import asyncHandler from 'express-async-handler'
import Indent from '../models/indentSchema.js'

const getIndents = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = 12;
  const skip = ((page - 1) * pageSize);

  const count = await Indent.countDocuments();

  const indents = await Indent.find({}).skip(skip).limit(pageSize);

  res.send({ indents, page, pages: Math.ceil(count / pageSize )})
})

const getIndentByDate = asyncHandler(async (req, res) => {
  let inputDate = req.params.date
  inputDate.concat("T00:00:00Z");
  try {
    const indents = await Indent.find({ indentDate : { "$gte": inputDate }})

    if (indents) {
      res.json(indents)
    } else {
      res.status(404)
      throw new Error('Sorry Indent not found')
    }
  } catch (err) {
    res.status(401)
    throw new Error('Sorry something went wrong')
  }
})

const getIndentById = asyncHandler(async (req, res) => {
  try {
    const indent = await Indent.findById(req.params.id)

    if (indent) {
      res.json(indent)
    } else {
      res.status(401)
      throw new Error('Sorry Indent not found')
    }
  } catch (error) {
    res.status(404)
    throw new Error('Sorry something went wrong')
  }
})

const updateIndent = asyncHandler(async (req, res) => {
  const indent = await Indent.findById(req.params.id)

  if (indent) {
    indent.tenCount = req.body.tenCount || indent.tenCount
    indent.twentyCount = req.body.twentyCount || indent.twentyCount
    indent.fiftyCount = req.body.fiftyCount || indent.fiftyCount
    indent.hundredCount = req.body.hundredCount || indent.hundredCount
    indent.fiveHundredCount =
      req.body.fiveHundredCount || indent.fiveHundredCount
    indent.thousandCount = req.body.thousandCount || indent.thousandCount
    indent.fiveThousandCount =
      req.body.fiveThousandCount || indent.fiveThousandCount
    indent.tenThousandCount =
      req.body.tenThousandCount || indent.tenThousandCount
    indent.fifteenThousandCount =
      req.body.fifteenThousandCount || indent.fifteenThousandCount
    indent.totalBalance = req.body.totalBalance || indent.totalBalance
    indent.totalDiscount = req.body.totalDiscount || indent.totalDiscount
    indent.actualBalance = req.body.actualBalance || indent.actualBalance
    indent.indentDate = req.body.indentDate || indent.indentDate

    const updatedIndent = await indent.save()

    res.json(updatedIndent)
  } else {
    res.status(401)
    throw new Error('Indent not found')
  }
})

const deleteIndent = asyncHandler(async (req, res) => {
  const indent = await Indent.findById(req.params.id)

  if (indent) {
    await indent.remove()

    res.json({ message: 'Indent deleted' })
  } else {
    res.status(401)
    throw new Error('Indent not found')
  }
})

const addIndent = asyncHandler(async (req, res) => {
  const {
    tenCount,
    tewntyCount,
    fiftyCount,
    hundredCount,
    fiveHundredCount,
    thousandCount,
    fiveThousandCount,
    tenThousandCount,
    fifteenThousandCount,
    totalBalance,
    totalDiscount,
    actualBalance,
    indentDate,
  } = req.body

  const newIndent = new Indent({
    tenCount,
    tewntyCount,
    fiftyCount,
    hundredCount,
    fiveHundredCount,
    fiveThousandCount,
    thousandCount,
    tenThousandCount,
    fifteenThousandCount,
    totalBalance,
    totalDiscount,
    actualBalance,
    indentDate,
  })

  try {
    const indent = await Indent.create(newIndent)

    res.json(indent)
  } catch (err) {
    res.status(401)
    throw new Error('Indent not found')
  }
})

export {
  getIndents,
  getIndentByDate,
  getIndentById,
  updateIndent,
  deleteIndent,
  addIndent,
}
