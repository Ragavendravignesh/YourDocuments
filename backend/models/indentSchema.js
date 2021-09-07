import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const indentSchema = mongoose.Schema(
  {
    tenCount: {
      type: Number,
      required: true,
      default: 0,
    },
    twentyCount: {
      type: Number,
      required: true,
      default: 0,
    },
    fiftyCount: {
      type: Number,
      required: true,
      default: 0,
    },
    hundredCount: {
      type: Number,
      required: true,
      default: 0,
    },
    fiveHundredCount: {
      type: Number,
      required: true,
      default: 0,
    },
    thousandCount: {
      type: Number,
      required: true,
      default: 0,
    },
    fiveThousandCount: {
      type: Number,
      required: true,
      default: 0,
    },
    tenThousandCount: {
      type: Number,
      required: true,
      default: 0,
    },
    fifteenThousandCount: {
      type: Number,
      required: true,
      default: 0,
    },
    totalBalance: {
      type: Number,
      required: true,
      default: 0,
    },
    totalDiscount: {
      type: Number,
      required: true,
      default: 0,
    },
    actualBalance: {
      type: Number,
      required: true,
      default: 0,
    },
    indentDate: {
      type: Date,
      required: true,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
)

const Indent = mongoose.model('Indent', indentSchema);

export default Indent;
