USE [REPOS]
GO

SET ANSI_PADDING OFF
GO

--Create procedure para obtener información sobre la empresa
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_GetEmpresa')
   exec('CREATE PROCEDURE [dbo].[API_GetEmpresa] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_GetEmpresa]
AS
	SET NOCOUNT ON;

	SELECT
    [ID_em]
      , [Nombre_em]
	  , [Descripcion_em]
FROM [dbo].[Empresa]
	
	SET NOCOUNT OFF;
GO





--*********************************************************************************************






--Create procedure para insertar un registro de un cliente nuevo
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_PostCliente')
   exec('CREATE PROCEDURE [dbo].[API_PostCliente] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_PostCliente]
    @i_Nombre_cl      varchar(30),
    @i_Apellido_cl    varchar(30),
    @i_Telefono_cl    varchar(50),
    @i_Correo_cl      varchar(150),
    @i_Cedula_cl      varchar(30)
AS
SET NOCOUNT ON;

    IF NOT EXISTS(SELECT TOP 1
    *
FROM [dbo].[Cliente]
WHERE [Cedula_cl] = @i_Cedula_cl)
    BEGIN
    INSERT [dbo].[Cliente]
        ([FechaRegistro_cl], [Nombre_cl], [Apellido_cl], [Telefono_cl], [Correo_cl], [Cedula_cl])
    VALUES
        (getdate(), @i_Nombre_cl, @i_Apellido_cl, @i_Telefono_cl, @i_Correo_cl, @i_Cedula_cl)
END

SET NOCOUNT OFF;

GO



--Create procedure para consultar un registro de un cliente
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_GetCliente')
   exec('CREATE PROCEDURE [dbo].[API_GetCliente] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_GetCliente]
    @i_cedula varchar(30)
AS
SET NOCOUNT ON;
    SELECT [Id_cl],
    [FechaRegistro_cl],
    [Nombre_cl],
    [Apellido_cl],
    [Telefono_cl],
    [Correo_cl],
    [Cedula_cl]
FROM [dbo].[Cliente]
WHERE [Cedula_cl] = @i_cedula
SET NOCOUNT OFF;
GO






--*********************************************************************************************************






--Create procedure para consultar todos los registros de articulos
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_GetAllArticulo')
   exec('CREATE PROCEDURE [dbo].[API_GetAllArticulo] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_GetAllArticulo]
AS
SET NOCOUNT ON;

    BEGIN
    SELECT [ID_ar], [FechaRegistro_ar], [Descripcion_ar],
        [Precio_ar], [PorcentajeImpuesto_ar], [Estatus_ar]
    FROM [dbo].[Articulo]

END
SET NOCOUNT OFF;
GO



--*********************************************************************************************************



--Create procedure para consultar todos los inventarios
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_GetAllInv')
   exec('CREATE PROCEDURE [dbo].[API_GetAllInv] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_GetAllInv]
AS
SET NOCOUNT ON;

SELECT [ID_in], [FechaRegistro_in], [AlmacenID_in], [Nombre_al], [ArticuloID_in], [Descripcion_ar], [Disponible_in]
FROM [dbo].[Inventario], [dbo].[Almacen], [dbo].[Articulo]
WHERE [AlmacenID_in] = [ID_al]
    AND [ArticuloID_in] = [ID_ar]

SET NOCOUNT OFF;
GO






--Create procedure para consultar todos los inventarios por sucursal
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_GetOneInv')
   exec('CREATE PROCEDURE [dbo].[API_GetOneInv] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_GetOneInv]
    @i_id_suc varchar(100)
AS
SET NOCOUNT ON;
SELECT [ID_in], [FechaRegistro_in], [AlmacenID_in], [Nombre_al], [ArticuloID_in], [Descripcion_ar], [Disponible_in]
FROM [dbo].[Inventario], [dbo].[Almacen], [dbo].[Articulo]
WHERE [AlmacenID_in] = [ID_al]
    AND [ArticuloID_in] = [ID_ar]
    AND [SucursalID_al] = @i_id_suc

SET NOCOUNT OFF;
GO