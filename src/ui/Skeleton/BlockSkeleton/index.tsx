import { Skeleton, SkeletonProps } from "@mui/material"
import { FC } from "react"

const BlockSkeleton: FC<SkeletonProps> = ({ variant = "rectangular", width = 300, height = 50, ...styles }) => {
  return <Skeleton sx={{cursor: "progress"}} variant={variant} width={width} height={height} {...styles} />
}

export default BlockSkeleton