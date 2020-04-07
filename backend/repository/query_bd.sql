CREATE DATABASE [REPOS]
GO
USE [REPOS]
GO
/****** Object:  Table [dbo].[Almacen]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Almacen]
(
	[ID_al] [uniqueidentifier] NOT NULL,
	[FechaRegistro_al] [datetime] NULL,
	[SucursalID_al] [uniqueidentifier] NULL,
	[Codigo_al] [varchar](10) NOT NULL,
	[Nombre_al] [varchar](100) NOT NULL,
	[Direccion_al] [varchar](300) NULL,
	[Estatus_al] [bit] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_al] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Articulo]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Articulo]
(
	[ID_ar] [uniqueidentifier] NOT NULL,
	[FechaRegistro_ar] [datetime] NULL,
	[Referencia_ar] [varchar](50) NOT NULL,
	[Descripcion_ar] [varchar](100) NULL,
	[FabricanteID_ar] [uniqueidentifier] NULL,
	[Precio_ar] [money] NULL,
	[PorcentajeImpuesto_ar] [int] NULL,
	[Estatus_ar] [bit] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_ar] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Caja]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Caja]
(
	[ID_ca] [uniqueidentifier] NOT NULL,
	[FechaRegistro_ca] [datetime] NULL,
	[AlmacenID_ca] [uniqueidentifier] NULL,
	[Codigo_ca] [varchar](10) NOT NULL,
	[Nombre_ca] [varchar](100) NULL,
	[Hostname_ca] [varchar](100) NULL,
	[Ip_ca] [varchar](50) NULL,
	[Estatus_ca] [bit] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_ca] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente]
(
	[ID_cl] [uniqueidentifier] NOT NULL,
	[FechaRegistro_cl] [datetime] NULL,
	[Codigo_cl] [varchar](20) NULL,
	[Nombre_cl] [varchar](30) NOT NULL,
	[Apellido_cl] [varchar](30) NOT NULL,
	[Telefono_cl] [varchar](50) NULL,
	[Correo_cl] [varchar](150) NULL,
	[Estatus_cl] [bit] NOT NULL,
	[Cedula_cl] [varchar](30) NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_cl] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Empresa]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Empresa]
(
	[ID_em] [uniqueidentifier] NOT NULL,
	[FechaRegistro_em] [datetime] NULL,
	[Codigo_em] [varchar](10) NOT NULL,
	[Nombre_em] [varchar](100) NOT NULL,
	[Estatus_em] [bit] NOT NULL,
	[Descripcion_em] [varchar](100) NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_em] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Fabricante]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fabricante]
(
	[ID_fa] [uniqueidentifier] NOT NULL,
	[FechaRegistro_fa] [datetime] NULL,
	[Codigo_fa] [varchar](10) NOT NULL,
	[Nombre_fa] [varchar](100) NULL,
	[Estatus_fa] [bit] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_fa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sucursal]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sucursal]
(
	[ID_su] [uniqueidentifier] NOT NULL,
	[FechaRegistro_su] [datetime] NULL,
	[EmpresaID_su] [uniqueidentifier] NULL,
	[Codigo_su] [varchar](10) NOT NULL,
	[Nombre_su] [varchar](100) NOT NULL,
	[Direccion_su] [varchar](300) NULL,
	[Estatus_su] [bit] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_su] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Venta]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Venta]
(
	[ID_ve] [uniqueidentifier] NOT NULL,
	[FechaRegistro_ve] [datetime] NULL,
	[SucursalID_ve] [uniqueidentifier] NOT NULL,
	[ClienteID_ve] [uniqueidentifier] NOT NULL,
	[CajaID_ve] [uniqueidentifier] NULL,
	[SubTotal_ve] [money] NOT NULL,
	[Impuesto_ve] [money] NULL,
	[Total_ve] [money] NOT NULL,
	[Lineas_ve] [int] NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_ve] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VentaD]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VentaD]
(
	[ID_vd] [uniqueidentifier] NOT NULL,
	[FechaRegistro_vd] [datetime] NULL,
	[VentaID_vd] [uniqueidentifier] NOT NULL,
	[ArticuloID_vd] [uniqueidentifier] NOT NULL,
	[Cantidad_vd] [int] NOT NULL,
	[Precio_vd] [money] NULL,
	[Descuento_vd] [money] NULL,
	[SubTotal_vd] [money] NOT NULL,
	[Impuesto_vd] [money] NULL,
	[Total_vd] [money] NOT NULL,
	PRIMARY KEY CLUSTERED 
(
	[ID_vd] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Inventario]    Script Date: 3/23/2020 8:09:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventario]
(

	ID_in UNIQUEIDENTIFIER NOT NULL,

	FechaRegistro_in DATETIME DEFAULT(GETDATE()),

	AlmacenID_in UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Almacen(ID_al) NOT NULL,

	Disponible_in INT DEFAULT(0),

	Reservado_in INT DEFAULT(0),

	ArticuloID_in UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Articulo(ID_ar) NOT NULL,

	Estatus_in BIT DEFAULT(1),
	PRIMARY KEY CLUSTERED 
(
	[ID_in] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT [dbo].[Almacen]
	([ID_al], [FechaRegistro_al], [SucursalID_al], [Codigo_al], [Nombre_al], [Direccion_al], [Estatus_al])
VALUES
	(N'bf0b9871-b3c5-4dba-bb14-307200c50e7c', CAST(N'2020-03-23T06:52:39.873' AS DateTime), N'8afc017c-79dd-464a-ac06-3825bd446f5a', N'A1-1', N'Piso de Venta Multiplaza', N'Mall Multiplaza Pacific. Local 15B. Segunda Planta', 1)
INSERT [dbo].[Cliente]
	([ID_cl], [FechaRegistro_cl], [Codigo_cl], [Nombre_cl], [Apellido_cl], [Telefono_cl], [Correo_cl], [Estatus_cl], [Cedula_cl])
VALUES
	(N'e7a21583-2784-4513-9f97-521940d788c7', CAST(N'2020-03-24T00:51:20.520' AS DateTime), NULL, N'Jose', N'Perez', NULL, NULL, 1, N'8-000-0000')
INSERT [dbo].[Cliente]
	([ID_cl], [FechaRegistro_cl], [Codigo_cl], [Nombre_cl], [Apellido_cl], [Telefono_cl], [Correo_cl], [Estatus_cl], [Cedula_cl])
VALUES
	(N'8070032e-2341-4107-969c-6dae75b52b48', CAST(N'2020-03-24T00:51:20.527' AS DateTime), NULL, N'Jorge', N'Arauz', NULL, NULL, 1, N'8-000-0000')
INSERT [dbo].[Cliente]
	([ID_cl], [FechaRegistro_cl], [Codigo_cl], [Nombre_cl], [Apellido_cl], [Telefono_cl], [Correo_cl], [Estatus_cl], [Cedula_cl])
VALUES
	(N'7ba1b3fe-89ea-4a5d-a8e3-acc37c8044ad', CAST(N'2020-03-24T00:51:20.527' AS DateTime), NULL, N'Maria', N'Gonzalez', NULL, NULL, 1, N'8-000-0000')
INSERT [dbo].[Cliente]
	([ID_cl], [FechaRegistro_cl], [Codigo_cl], [Nombre_cl], [Apellido_cl], [Telefono_cl], [Correo_cl], [Estatus_cl], [Cedula_cl])
VALUES
	(N'27965884-9204-4d90-b1d4-ffa69605630d', CAST(N'2020-03-24T00:31:40.493' AS DateTime), NULL, N'Rolando', N'Medina', N'64821553', N'rolando.ms@outlook.com', 1, N'8-909-2269')
INSERT [dbo].[Empresa]
	([ID_em], [FechaRegistro_em], [Codigo_em], [Nombre_em], [Estatus_em], [Descripcion_em])
VALUES
	(N'97dc7f59-2eaf-4864-8d84-1125e55ed6aa', CAST(N'2020-03-23T06:46:40.937' AS DateTime), N'E1', N'Pro Retailers S.A.', 1, 'Empresa dedicada a la venta de articulos varios')
INSERT [dbo].[Sucursal]
	([ID_su], [FechaRegistro_su], [EmpresaID_su], [Codigo_su], [Nombre_su], [Direccion_su], [Estatus_su])
VALUES
	(N'8afc017c-79dd-464a-ac06-3825bd446f5a', CAST(N'2020-03-23T06:50:47.200' AS DateTime), N'97dc7f59-2eaf-4864-8d84-1125e55ed6aa', N'S1-1', N'Tienda Pro Retailers Multiplaza', N'Mall Multiplaza Pacific. Via Israel', 1)
ALTER TABLE [dbo].[Almacen] ADD  DEFAULT (newid()) FOR [ID_al]
GO
ALTER TABLE [dbo].[Almacen] ADD  DEFAULT (getdate()) FOR [FechaRegistro_al]
GO
ALTER TABLE [dbo].[Almacen] ADD  DEFAULT ((1)) FOR [Estatus_al]
GO
ALTER TABLE [dbo].[Articulo] ADD  DEFAULT (newid()) FOR [ID_ar]
GO
ALTER TABLE [dbo].[Articulo] ADD  DEFAULT (getdate()) FOR [FechaRegistro_ar]
GO
ALTER TABLE [dbo].[Articulo] ADD  DEFAULT ((1)) FOR [Estatus_ar]
GO
ALTER TABLE [dbo].[Caja] ADD  DEFAULT (newid()) FOR [ID_ca]
GO
ALTER TABLE [dbo].[Caja] ADD  DEFAULT (getdate()) FOR [FechaRegistro_ca]
GO
ALTER TABLE [dbo].[Caja] ADD  DEFAULT ((1)) FOR [Estatus_ca]
GO
ALTER TABLE [dbo].[Cliente] ADD  DEFAULT (newid()) FOR [ID_cl]
GO
ALTER TABLE [dbo].[Cliente] ADD  DEFAULT (getdate()) FOR [FechaRegistro_cl]
GO
ALTER TABLE [dbo].[Cliente] ADD  DEFAULT ((1)) FOR [Estatus_cl]
GO
ALTER TABLE [dbo].[Empresa] ADD  DEFAULT (newid()) FOR [ID_em]
GO
ALTER TABLE [dbo].[Empresa] ADD  DEFAULT (getdate()) FOR [FechaRegistro_em]
GO
ALTER TABLE [dbo].[Empresa] ADD  DEFAULT ((1)) FOR [Estatus_em]
GO
ALTER TABLE [dbo].[Fabricante] ADD  DEFAULT (newid()) FOR [ID_fa]
GO
ALTER TABLE [dbo].[Fabricante] ADD  DEFAULT (getdate()) FOR [FechaRegistro_fa]
GO
ALTER TABLE [dbo].[Fabricante] ADD  DEFAULT ((1)) FOR [Estatus_fa]
GO
ALTER TABLE [dbo].[Sucursal] ADD  DEFAULT (newid()) FOR [ID_su]
GO
ALTER TABLE [dbo].[Sucursal] ADD  DEFAULT (getdate()) FOR [FechaRegistro_su]
GO
ALTER TABLE [dbo].[Sucursal] ADD  DEFAULT ((1)) FOR [Estatus_su]
GO
ALTER TABLE [dbo].[Venta] ADD  DEFAULT (newid()) FOR [ID_ve]
GO
ALTER TABLE [dbo].[Venta] ADD  DEFAULT (getdate()) FOR [FechaRegistro_ve]
GO
ALTER TABLE [dbo].[VentaD] ADD  DEFAULT (newid()) FOR [ID_vd]
GO
ALTER TABLE [dbo].[VentaD] ADD  DEFAULT (getdate()) FOR [FechaRegistro_vd]
GO
ALTER TABLE [dbo].[Almacen]  WITH CHECK ADD FOREIGN KEY([SucursalID_al])
REFERENCES [dbo].[Sucursal] ([ID_su])
GO
ALTER TABLE [dbo].[Almacen]  WITH CHECK ADD FOREIGN KEY([SucursalID_al])
REFERENCES [dbo].[Sucursal] ([ID_su])
GO
ALTER TABLE [dbo].[Articulo]  WITH CHECK ADD FOREIGN KEY([FabricanteID_ar])
REFERENCES [dbo].[Fabricante] ([ID_fa])
GO
ALTER TABLE [dbo].[Articulo]  WITH CHECK ADD FOREIGN KEY([FabricanteID_ar])
REFERENCES [dbo].[Fabricante] ([ID_fa])
GO
ALTER TABLE [dbo].[Caja]  WITH CHECK ADD FOREIGN KEY([AlmacenID_ca])
REFERENCES [dbo].[Almacen] ([ID_al])
GO
ALTER TABLE [dbo].[Caja]  WITH CHECK ADD FOREIGN KEY([AlmacenID_ca])
REFERENCES [dbo].[Almacen] ([ID_al])
GO
ALTER TABLE [dbo].[Sucursal]  WITH CHECK ADD FOREIGN KEY([EmpresaID_su])
REFERENCES [dbo].[Empresa] ([ID_em])
GO
ALTER TABLE [dbo].[Sucursal]  WITH CHECK ADD FOREIGN KEY([EmpresaID_su])
REFERENCES [dbo].[Empresa] ([ID_em])
GO
ALTER TABLE [dbo].[Venta]  WITH CHECK ADD FOREIGN KEY([CajaID_ve])
REFERENCES [dbo].[Caja] ([ID_ca])
GO
ALTER TABLE [dbo].[Venta]  WITH CHECK ADD FOREIGN KEY([CajaID_ve])
REFERENCES [dbo].[Caja] ([ID_ca])
GO
ALTER TABLE [dbo].[Venta]  WITH CHECK ADD FOREIGN KEY([ClienteID_ve])
REFERENCES [dbo].[Cliente] ([ID_cl])
GO
ALTER TABLE [dbo].[Venta]  WITH CHECK ADD FOREIGN KEY([ClienteID_ve])
REFERENCES [dbo].[Cliente] ([ID_cl])
GO
ALTER TABLE [dbo].[Venta]  WITH CHECK ADD FOREIGN KEY([SucursalID_ve])
REFERENCES [dbo].[Sucursal] ([ID_su])
GO
ALTER TABLE [dbo].[Venta]  WITH CHECK ADD FOREIGN KEY([SucursalID_ve])
REFERENCES [dbo].[Sucursal] ([ID_su])
GO
ALTER TABLE [dbo].[VentaD]  WITH CHECK ADD FOREIGN KEY([ArticuloID_vd])
REFERENCES [dbo].[Articulo] ([ID_ar])
GO
ALTER TABLE [dbo].[VentaD]  WITH CHECK ADD FOREIGN KEY([ArticuloID_vd])
REFERENCES [dbo].[Articulo] ([ID_ar])
GO
ALTER TABLE [dbo].[VentaD]  WITH CHECK ADD FOREIGN KEY([VentaID_vd])
REFERENCES [dbo].[Venta] ([ID_ve])
GO
ALTER TABLE [dbo].[VentaD]  WITH CHECK ADD FOREIGN KEY([VentaID_vd])
REFERENCES [dbo].[Venta] ([ID_ve])
GO