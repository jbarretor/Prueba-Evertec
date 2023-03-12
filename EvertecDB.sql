CREATE DATABASE [Evertec]
GO

USE [Evertec]
GO
/****** Object:  Table [dbo].[PersonInformation]    Script Date: 12/03/2023 5:04:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonInformation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](100) NULL,
	[LastName] [nvarchar](100) NULL,
	[Birth] [date] NULL,
	[MaritalStatus] [int] NULL,
	[HasSiblings] [bit] NULL,
	[Photo] [image] NULL,
 CONSTRAINT [PK_PersonInformation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
