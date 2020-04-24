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
    Convert(nvarchar(12),[FechaRegistro_cl], 101) as FechaRegistro_cl,
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
SELECT --[ID_in], [AlmacenID_in],
    [ArticuloID_in], Convert(nvarchar(12),[FechaRegistro_in], 101) as FechaRegistro_in, [Nombre_al], [Descripcion_ar],
    [Disponible_in], [Precio_ar], [PorcentajeImpuesto_ar]
FROM [dbo].[Inventario], [dbo].[Almacen], [dbo].[Articulo]
WHERE [AlmacenID_in] = [ID_al]
    AND [ArticuloID_in] = [ID_ar]
    AND [SucursalID_al] = @i_id_suc

SET NOCOUNT OFF;
GO


--*********************************************************************************************************

--Create procedure para validar id de sucursal
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_GetSucID')
   exec('CREATE PROCEDURE [dbo].[API_GetSucID] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_GetSucID]
AS
SET NOCOUNT ON;

    SELECT [ID_su], [Nombre_su]
    FROM [dbo].[Sucursal]

SET NOCOUNT OFF;
GO




--*********************************************************************************************************

--Create procedure para insertar una ventana
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_PostVenta')
   exec('CREATE PROCEDURE [dbo].[API_PostVenta] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_PostVenta]
    @i_cedula VARCHAR(30),
    @i_id_art VARCHAR(100),
    @i_cantidad int,
    @i_id_suc VARCHAR(100),
    @output_parameter Varchar(100) OUTPUT
AS
DECLARE @w_caja_id uniqueidentifier,
        @w_cliente_id uniqueidentifier,
        @w_subtotal money,
        @w_por_impuesto int,
        @w_impuesto money,
        @w_total money,
        @w_cant_rest int,
        @w_disponible int,
        @w_id_inv uniqueidentifier,
        @w_id_venta uniqueidentifier,
        @w_precio money
SET NOCOUNT ON;

IF EXISTS (SELECT TOP 1
    *
FROM [dbo].[Cliente]
WHERE [Cedula_cl] = @i_cedula)
    BEGIN

    SELECT @w_cliente_id = [ID_cl]
    FROM [dbo].[Cliente]
    WHERE [Cedula_cl] = @i_cedula

    SELECT @output_parameter = 'HASTA AQUI'

    SELECT @w_caja_id = [ID_ca]
    FROM [dbo].[Caja], [dbo].[Sucursal], [dbo].[Almacen]
    WHERE [AlmacenID_ca] = [ID_al]
        AND [SucursalID_al] = [ID_su]
        AND [ID_su] = @i_id_suc

    SELECT @w_precio = [Precio_ar], @w_por_impuesto = [PorcentajeImpuesto_ar]
    FROM [dbo].[Articulo]
    WHERE [ID_ar] = @i_id_art

    SELECT @w_subtotal = @w_precio * @i_cantidad

    SELECT @w_disponible = [Disponible_in], @w_id_inv = [ID_in]
    FROM [dbo].[Inventario], [dbo].[Almacen], [dbo].[Articulo]
    WHERE [AlmacenID_in] = [ID_al]
        AND [ArticuloID_in] = [ID_ar]
        AND [SucursalID_al] = @i_id_suc
        AND [ID_ar] = @i_id_art

    if(@w_por_impuesto = 7)
            SELECT @w_impuesto = @w_subtotal * 0.07

    SELECT @w_total = @w_subtotal + @w_impuesto

    SET @w_id_venta = NEWID()

    SELECT
        @w_caja_id as 'ID CAJA',
        @w_cliente_id as 'ID CLIENTE',
        @w_subtotal as 'SUBTOTAL',
        @w_por_impuesto as '% IMPUESTO',
        @w_impuesto as 'IMPUESTO',
        @w_total as 'TOTAL',
        @w_cant_rest as 'CANT REST',
        @w_disponible as 'DISPONIBLE',
        @w_id_inv as 'ID INV',
        @w_id_venta as 'ID VENTA'



    IF(@w_disponible > @i_cantidad)
    BEGIN
        INSERT [dbo].[Venta]
            ([ID_ve],[SucursalID_ve], [ClienteID_ve], [CajaID_ve],
            [SubTotal_ve], [Impuesto_ve], [Total_ve])
        VALUES
            (
                @w_id_venta, @i_id_suc, @w_cliente_id, @w_caja_id, @w_subtotal, @w_impuesto, @w_total
                )

        IF(@@error = 0 AND @@rowcount = 1)
            BEGIN
            SELECT @w_cant_rest = @w_disponible - @i_cantidad


            -- SELECT @w_cant_rest as 'Cantidad Rest'

            INSERT [dbo].[VentaD]
                ([VentaID_vd], [ArticuloID_vd], [Cantidad_vd],
                [Precio_vd], [Descuento_vd], [Subtotal_vd], [Impuesto_vd], [Total_vd])
            VALUES
                (
                    @w_id_venta, @i_id_art, @i_cantidad, @w_precio, 0, @w_subtotal, @w_impuesto, @w_total
                        )
            UPDATE [dbo].[Inventario]
                            SET [Disponible_in] = @w_cant_rest
                            WHERE [ID_in] = @w_id_inv
        END
    END
END

SET NOCOUNT OFF;
GO



--*********************************************************************************************************

--Create procedure para consultar las transacciones realizadas por cliente en la sucursal de conexión
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_GetComprasCliente')
   exec('CREATE PROCEDURE [dbo].[API_GetComprasCliente] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_GetComprasCliente]
    @i_cedula VARCHAR(30),
    @id_sucursal VARCHAR(100)
AS
SET NOCOUNT ON;

    SELECT [Descripcion_ar], [Cantidad_vd], [SubTotal_ve], [Impuesto_ve], [Total_ve]
FROM [dbo].[Venta], [dbo].[VentaD], [dbo].[Articulo], [dbo].[Cliente] 
WHERE [ClienteID_ve] = [ID_cl]
    AND [SucursalID_ve] = @id_sucursal
    AND [Cedula_cl] = @i_cedula
    AND [ID_ve] = [VentaID_vd]
    AND [ID_ar] = [ArticuloID_vd]


SET NOCOUNT OFF;
GO


--*********************************************************************************************************

--Create procedure para consultar las transacciones realizadas en la sucursal de conexión
IF NOT EXISTS (SELECT *
FROM sys.objects
WHERE type = 'P' AND name = 'API_GetCompras')
   exec('CREATE PROCEDURE [dbo].[API_GetCompras] AS BEGIN SET NOCOUNT ON; END')
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[API_GetCompras]
    @id_sucursal VARCHAR(100)
AS
DECLARE @w_cliente_id VARCHAR(100)
SET NOCOUNT ON;

SELECT [Nombre_cl], [Apellido_cl], [Telefono_cl], [Correo_cl], [Cedula_cl],
    [Descripcion_ar], [Cantidad_vd], [SubTotal_ve], [Impuesto_ve], [Total_ve],
    Convert(nvarchar(12),[FechaRegistro_ve], 101) as "Fecha_Registro"
FROM [dbo].[Venta], [dbo].[VentaD], [dbo].[Articulo], [dbo].[Cliente]
WHERE [ClienteID_ve] = [ID_cl]
    AND [SucursalID_ve] = @id_sucursal
    AND [ID_ve] = [VentaID_vd]
    AND [ID_ar] = [ArticuloID_vd]
    ORDER BY [FechaRegistro_ve]


SET NOCOUNT OFF;
GO